import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fbslsxzirjpyzgqbdkfe.supabase.co',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2xzeHppcmpweXpncWJka2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MTA4MDYsImV4cCI6MjA3Mjk4NjgwNn0.jdpyXOc-LI7g0icL2BHVLb8likh8WnQ67gMUNdDVksw'
    );

    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (!posts || posts.length === 0) return [];

    return posts.map((post) => ({
      url: `https://lavillaesthetique-toulouse.com/blog/${post.slug}/`,
      lastModified: new Date(post.updated_at || post.published_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch {
    return [];
  }
}
