'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  LogOut, Plus, Pencil, Trash2, Eye, EyeOff, Star, StarOff,
  X, Check, AlertCircle, ChevronLeft, ImageIcon, Loader2,
  FileText, Calendar, Tag, User, Clock, Search, RefreshCw
} from 'lucide-react';

// ─── Supabase client (anon key — auth uniquement côté client) ─────────────────
const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fbslsxzirjpyzgqbdkfe.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2xzeHppcmpweXpncWJka2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MTA4MDYsImV4cCI6MjA3Mjk4NjgwNn0.jdpyXOc-LI7g0icL2BHVLb8likh8WnQ67gMUNdDVksw'
);

// ─── Types ───────────────────────────────────────────────────────────────────
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  author: string;
  published_at: string;
  read_time: number;
  featured: boolean;
  published: boolean;
  meta_title: string;
  meta_description: string;
  keywords: string;
  created_at: string;
  updated_at: string;
}

const EMPTY_POST: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'> = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  image_url: '',
  category: '',
  author: 'Dr Nadine Baron',
  published_at: new Date().toISOString().slice(0, 16),
  read_time: 5,
  featured: false,
  published: false,
  meta_title: '',
  meta_description: '',
  keywords: '',
};

const CATEGORIES = [
  'Injections & Anti-âge',
  'Épilation Laser',
  'Soins du Visage',
  'Traitements Corporels',
  'Laser & Technologies',
  'Conseils Beauté',
  'Actualités Cabinet',
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function imageFilename(title: string): string {
  const base = slugify(title);
  return `${base}-la-villa-esthetique-toulouse.webp`;
}

async function convertToWebP(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      // Cap à 1400px de large pour ne pas saturer Supabase
      const maxW = 1400;
      const ratio = Math.min(1, maxW / img.width);
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('Conversion WebP échouée'))),
        'image/webp',
        0.85
      );
    };
    img.onerror = () => reject(new Error('Chargement image échoué'));
    img.src = url;
  });
}

// ─── Image Upload Component ───────────────────────────────────────────────────
function ImageUpload({
  value,
  onChange,
  postTitle,
}: {
  value: string;
  onChange: (url: string) => void;
  postTitle: string;
}) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('Fichier non supporté. Utilisez JPG, PNG, WebP ou GIF.');
      return;
    }
    setError('');
    setUploading(true);
    try {
      const webpBlob = await convertToWebP(file);
      const filename = imageFilename(postTitle || file.name.replace(/\.[^.]+$/, ''));
      const path = `blog images/${filename}`;

      // Convertir le blob WebP en base64 (méthode robuste pour les grandes images)
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          // dataUrl = "data:image/webp;base64,XXXX" → on extrait la partie après la virgule
          resolve(dataUrl.split(',')[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(webpBlob);
      });

      // Upload via la route API serveur avec token JWT
      const { data: { session } } = await supabaseClient.auth.getSession();
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token || ''}`,
        },
        body: JSON.stringify({ base64, path }),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || 'Erreur upload.');
      onChange(json.url);
    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'upload.');
    } finally {
      setUploading(false);
    }
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">Image de couverture</label>

      {/* Zone drag & drop */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
          dragging ? 'border-rose-400 bg-rose-50' : 'border-gray-300 hover:border-rose-400 hover:bg-rose-50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
        />

        {uploading ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
            <p className="text-sm text-gray-600">Conversion WebP & upload en cours…</p>
          </div>
        ) : value ? (
          <div className="relative group">
            <img src={value} alt="Couverture" className="w-full h-52 object-cover rounded-xl" />
            <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <span className="text-white text-sm font-medium">Cliquer pour changer</span>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(''); }}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <ImageIcon className="w-10 h-10 text-gray-400" />
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">Glisser-déposer ou cliquer</p>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG, GIF → converti en WebP automatiquement</p>
            </div>
          </div>
        )}
      </div>

      {value && !uploading && (
        <p className="text-xs text-gray-500 truncate">
          <span className="font-medium">URL :</span> {value}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AdminBlogPage() {
  // Auth
  const [authed, setAuthed] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // UI
  const [view, setView] = useState<'list' | 'form'>('list');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Form
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...EMPTY_POST });

  // ── Auth check via Supabase session ──
  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setAuthed(!!session);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: loginEmail,
      password: loginPwd,
    });
    if (error) {
      setLoginError('Identifiants incorrects.');
    }
    setLoginLoading(false);
  }

  async function logout() {
    await supabaseClient.auth.signOut();
  }

  // ── Toast ──
  function showToast(msg: string, type: 'success' | 'error' = 'success') {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }

  // ── Helper : headers avec token JWT ──
  async function authHeaders() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.access_token || ''}`,
    };
  }

  // ── Fetch posts ──
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const headers = await authHeaders();
      const res = await fetch('/api/admin/blog', { headers });
      const json = await res.json();
      if (!res.ok) showToast(json.error || 'Erreur chargement.', 'error');
      else setPosts(json.data || []);
    } catch (err: any) {
      showToast(err.message || 'Erreur réseau.', 'error');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchPosts();
  }, [authed, fetchPosts]);

  // ── Form ──
  function openNew() {
    setEditingId(null);
    setForm({ ...EMPTY_POST, published_at: new Date().toISOString().slice(0, 16) });
    setView('form');
  }

  function openEdit(post: BlogPost) {
    setEditingId(post.id);
    setForm({
      title: post.title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      image_url: post.image_url || '',
      category: post.category || '',
      author: post.author || 'Dr Nadine Baron',
      published_at: post.published_at?.slice(0, 16) || new Date().toISOString().slice(0, 16),
      read_time: post.read_time || 5,
      featured: post.featured || false,
      published: post.published || false,
      meta_title: post.meta_title || '',
      meta_description: post.meta_description || '',
      keywords: post.keywords || '',
    });
    setView('form');
  }

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // Auto-slug depuis le titre si nouvel article
      if (key === 'title' && !editingId) {
        next.slug = slugify(String(value));
      }
      return next;
    });
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.slug || !form.excerpt || !form.category) {
      showToast('Titre, slug, extrait et catégorie sont requis.', 'error');
      return;
    }
    setSaving(true);
    const payload = {
      ...form,
      published_at: new Date(form.published_at).toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      const headers = await authHeaders();
      let res: Response;
      if (editingId) {
        res = await fetch('/api/admin/blog', {
          method: 'PUT',
          headers,
          body: JSON.stringify({ id: editingId, ...payload }),
        });
      } else {
        res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers,
          body: JSON.stringify({ ...payload, created_at: new Date().toISOString() }),
        });
      }
      const json = await res.json();
      if (!res.ok) {
        showToast(json.error || 'Erreur lors de la sauvegarde.', 'error');
      } else {
        showToast(editingId ? 'Article mis à jour ✓' : 'Article créé ✓');
        await fetchPosts();
        setView('list');
      }
    } catch (err: any) {
      showToast(err.message || 'Erreur réseau.', 'error');
    }
    setSaving(false);
  }

  async function deletePost(id: string) {
    try {
      const headers = await authHeaders();
      const res = await fetch('/api/admin/blog', {
        method: 'DELETE',
        headers,
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!res.ok) showToast(json.error || 'Erreur suppression.', 'error');
      else {
        showToast('Article supprimé.');
        setPosts((p) => p.filter((x) => x.id !== id));
      }
    } catch (err: any) {
      showToast(err.message || 'Erreur réseau.', 'error');
    }
    setDeleteId(null);
  }

  async function togglePublished(post: BlogPost) {
    try {
      const headers = await authHeaders();
      const res = await fetch('/api/admin/blog', {
        method: 'PUT',
        headers,
        body: JSON.stringify({ id: post.id, published: !post.published, updated_at: new Date().toISOString() }),
      });
      const json = await res.json();
      if (!res.ok) showToast(json.error || 'Erreur.', 'error');
      else {
        setPosts((p) => p.map((x) => (x.id === post.id ? { ...x, published: !x.published } : x)));
        showToast(!post.published ? 'Article publié ✓' : 'Article dépublié.');
      }
    } catch (err: any) {
      showToast(err.message || 'Erreur réseau.', 'error');
    }
  }

  async function toggleFeatured(post: BlogPost) {
    try {
      const headers = await authHeaders();
      const res = await fetch('/api/admin/blog', {
        method: 'PUT',
        headers,
        body: JSON.stringify({ id: post.id, featured: !post.featured, updated_at: new Date().toISOString() }),
      });
      const json = await res.json();
      if (!res.ok) showToast(json.error || 'Erreur.', 'error');
      else {
        setPosts((p) => p.map((x) => (x.id === post.id ? { ...x, featured: !x.featured } : x)));
        showToast(!post.featured ? 'Mis en avant ✓' : 'Retiré de la mise en avant.');
      }
    } catch (err: any) {
      showToast(err.message || 'Erreur réseau.', 'error');
    }
  }

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category?.toLowerCase().includes(search.toLowerCase()) ||
      p.slug?.toLowerCase().includes(search.toLowerCase())
  );

  // ════════════════════════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ════════════════════════════════════════════════════════════════════════════
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin</h1>
            <p className="text-gray-400 text-sm mt-1">La Villa Esthétique</p>
          </div>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
                placeholder="votre@email.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Mot de passe</label>
              <input
                type="password"
                value={loginPwd}
                onChange={(e) => setLoginPwd(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
                placeholder="••••••••••"
                autoComplete="current-password"
              />
            </div>
            {loginError && (
              <p className="text-red-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> {loginError}
              </p>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loginLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  // ADMIN APP
  // ════════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-medium transition-all ${
            toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {toast.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          {toast.msg}
        </div>
      )}

      {/* Confirm delete modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Supprimer l'article ?</h3>
            <p className="text-gray-600 text-sm mb-6">Cette action est irréversible.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => deletePost(deleteId)}
                className="flex-1 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {view === 'form' && (
              <button
                onClick={() => setView('list')}
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">Blog Admin</span>
            {view === 'form' && (
              <span className="text-gray-400 text-sm">/ {editingId ? 'Modifier' : 'Nouvel article'}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <a href="/blog" target="_blank" className="text-xs text-gray-500 hover:text-rose-600 transition-colors">
              Voir le blog ↗
            </a>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" /> Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">

        {/* ── LIST VIEW ─────────────────────────────────────────────────────── */}
        {view === 'list' && (
          <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Articles du blog</h2>
                <p className="text-sm text-gray-500">{posts.length} article{posts.length !== 1 ? 's' : ''} au total</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Rechercher…"
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 bg-white"
                  />
                </div>
                <button
                  onClick={fetchPosts}
                  className="p-2 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                  title="Rafraîchir"
                >
                  <RefreshCw className={`w-4 h-4 text-gray-500 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={openNew}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition-colors text-sm whitespace-nowrap"
                >
                  <Plus className="w-4 h-4" /> Nouvel article
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Publiés', value: posts.filter(p => p.published).length, color: 'text-green-600 bg-green-50' },
                { label: 'Brouillons', value: posts.filter(p => !p.published).length, color: 'text-amber-600 bg-amber-50' },
                { label: 'En avant', value: posts.filter(p => p.featured).length, color: 'text-rose-600 bg-rose-50' },
              ].map(s => (
                <div key={s.label} className={`rounded-xl p-4 ${s.color}`}>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs font-medium opacity-80">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Table */}
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                {search ? 'Aucun article ne correspond à la recherche.' : 'Aucun article pour l\'instant.'}
              </div>
            ) : (
              <div className="space-y-2">
                {filtered.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 items-start hover:shadow-sm transition-shadow"
                  >
                    {/* Image */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">
                      {post.image_url ? (
                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-gray-300" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{post.title}</h3>
                        {post.featured && (
                          <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-medium">⭐ En avant</span>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          post.published ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {post.published ? 'Publié' : 'Brouillon'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 truncate mb-1">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                        {post.category && <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{post.category}</span>}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_at).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read_time} min</span>
                        <span className="text-gray-300 font-mono text-xs">{post.slug}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={() => toggleFeatured(post)}
                        className={`p-2 rounded-lg transition-colors ${post.featured ? 'text-rose-500 hover:bg-rose-50' : 'text-gray-400 hover:bg-gray-100'}`}
                        title={post.featured ? 'Retirer de la mise en avant' : 'Mettre en avant'}
                      >
                        {post.featured ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => togglePublished(post)}
                        className={`p-2 rounded-lg transition-colors ${post.published ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'}`}
                        title={post.published ? 'Dépublier' : 'Publier'}
                      >
                        {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => openEdit(post)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Modifier"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeleteId(post.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── FORM VIEW ─────────────────────────────────────────────────────── */}
        {view === 'form' && (
          <form onSubmit={save} className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? 'Modifier l\'article' : 'Nouvel article'}
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setView('list')}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition-colors text-sm disabled:opacity-50"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                  {editingId ? 'Enregistrer' : 'Créer l\'article'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Colonne principale */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
                  <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Contenu</h3>

                  {/* Titre */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Titre *</label>
                    <input
                      value={form.title}
                      onChange={(e) => set('title', e.target.value)}
                      placeholder="Titre de l'article…"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm"
                      required
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Slug (URL) *</label>
                    <input
                      value={form.slug}
                      onChange={(e) => set('slug', slugify(e.target.value))}
                      placeholder="mon-article-seo-friendly"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm font-mono"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      URL : <span className="font-mono">/blog/{form.slug}/</span>
                    </p>
                  </div>

                  {/* Extrait */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Extrait * <span className="font-normal text-gray-400">(résumé visible sur la liste)</span></label>
                    <textarea
                      value={form.excerpt}
                      onChange={(e) => set('excerpt', e.target.value)}
                      rows={3}
                      placeholder="Court résumé de l'article…"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm resize-none"
                      required
                    />
                  </div>

                  {/* Contenu HTML */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Contenu HTML <span className="font-normal text-gray-400">(HTML complet de l'article)</span>
                    </label>
                    <textarea
                      value={form.content}
                      onChange={(e) => set('content', e.target.value)}
                      rows={18}
                      placeholder="<h2>Introduction</h2><p>Contenu de l'article…</p>"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm resize-y font-mono text-xs leading-relaxed"
                    />
                  </div>
                </div>

                {/* SEO */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
                  <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">SEO</h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Meta title <span className="font-normal text-gray-400">(70 car. max)</span>
                    </label>
                    <input
                      value={form.meta_title}
                      onChange={(e) => set('meta_title', e.target.value)}
                      maxLength={70}
                      placeholder={form.title || 'Titre SEO…'}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm"
                    />
                    <p className="text-xs text-gray-400 mt-1">{form.meta_title.length}/70</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Meta description <span className="font-normal text-gray-400">(160 car. max)</span>
                    </label>
                    <textarea
                      value={form.meta_description}
                      onChange={(e) => set('meta_description', e.target.value)}
                      maxLength={160}
                      rows={3}
                      placeholder="Description pour Google (résultats de recherche)…"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm resize-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">{form.meta_description.length}/160</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Keywords <span className="font-normal text-gray-400">(séparés par des virgules)</span></label>
                    <input
                      value={form.keywords}
                      onChange={(e) => set('keywords', e.target.value)}
                      placeholder="injection lèvres toulouse, acide hyaluronique, Dr Baron…"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Colonne latérale */}
              <div className="space-y-4">
                {/* Publication */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
                  <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Publication</h3>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => set('published', !form.published)}
                      className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 flex items-center px-1 ${form.published ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${form.published ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{form.published ? 'Publié' : 'Brouillon'}</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => set('featured', !form.featured)}
                      className={`w-10 h-6 rounded-full transition-colors flex-shrink-0 flex items-center px-1 ${form.featured ? 'bg-rose-500' : 'bg-gray-300'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${form.featured ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">⭐ Mettre en avant</span>
                  </label>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date de publication</label>
                    <input
                      type="datetime-local"
                      value={form.published_at}
                      onChange={(e) => set('published_at', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm"
                    />
                  </div>
                </div>

                {/* Métadonnées */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
                  <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Infos article</h3>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Catégorie *</label>
                    <select
                      value={form.category}
                      onChange={(e) => set('category', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm bg-white"
                      required
                    >
                      <option value="">Sélectionner…</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Auteur</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        value={form.author}
                        onChange={(e) => set('author', e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Temps de lecture (minutes)</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        min={1}
                        max={60}
                        value={form.read_time}
                        onChange={(e) => set('read_time', parseInt(e.target.value) || 5)}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="bg-white rounded-2xl border border-gray-200 p-5">
                  <ImageUpload
                    value={form.image_url}
                    onChange={(url) => set('image_url', url)}
                    postTitle={form.title}
                  />
                </div>
              </div>
            </div>

            {/* Save bottom */}
            <div className="flex justify-end gap-3 pb-8">
              <button
                type="button"
                onClick={() => setView('list')}
                className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2.5 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Check className="w-5 h-5" />}
                {editingId ? 'Enregistrer les modifications' : 'Créer l\'article'}
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
