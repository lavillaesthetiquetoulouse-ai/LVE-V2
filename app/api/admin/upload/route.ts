import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Lazy init : createClient appelé à la requête, pas au build
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

async function verifyAuth(req: NextRequest): Promise<boolean> {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) return false;
  const { data: { user }, error } = await getSupabase().auth.getUser(token);
  return !!user && !error;
}

export async function POST(req: NextRequest) {
  if (!await verifyAuth(req)) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }
  try {
    const { base64, path } = (await req.json()) as { base64: string; path: string };

    if (!base64 || !path) {
      return NextResponse.json({ error: 'base64 ou path manquant.' }, { status: 400 });
    }

    const supabase = getSupabase();
    const buffer = Buffer.from(base64, 'base64');

    const { error } = await supabase.storage
      .from('Images')
      .upload(path, buffer, { contentType: 'image/webp', upsert: true });

    if (error) {
      console.error('[upload] Supabase error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const { data } = supabase.storage.from('Images').getPublicUrl(path);
    return NextResponse.json({ url: data.publicUrl });
  } catch (err: any) {
    console.error('[upload] Exception:', err.message);
    return NextResponse.json({ error: err.message || 'Erreur serveur.' }, { status: 500 });
  }
}
