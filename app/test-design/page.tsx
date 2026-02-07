export default function TestDesignPage() {
  return (
    <div className="p-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-accent-coffee">
          Kaffe Tech Design System
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Visual verification of the "Kaffe Tech" aesthetic tokens. minimalist, high-tech Japanese cafe vibe.
        </p>
      </section>

      {/* Color Palette */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-24 w-full bg-background border border-divider rounded-xl"></div>
            <p className="text-sm font-medium">Background (#F9F9F9)</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-divider rounded-xl"></div>
            <p className="text-sm font-medium">Divider (#E0E0E0)</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-accent-blue rounded-xl"></div>
            <p className="text-sm font-medium">Accent Blue (#00D1FF)</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 w-full bg-accent-coffee rounded-xl"></div>
            <p className="text-sm font-medium">Accent Coffee (#3E2723)</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Typography (Inter)</h2>
        <div className="space-y-4 border border-divider p-8 rounded-bento bg-white">
          <p className="text-6xl font-black">The quick brown fox</p>
          <p className="text-5xl font-extrabold">The quick brown fox</p>
          <p className="text-4xl font-bold">The quick brown fox</p>
          <p className="text-3xl font-semibold">The quick brown fox</p>
          <p className="text-2xl font-medium">The quick brown fox</p>
          <p className="text-xl font-normal">The quick brown fox</p>
        </div>
      </section>

      {/* Bento Grid Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Bento Grid Utilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
          <div className="bento-card h-48 flex items-center justify-center">
            <span className="text-accent-blue font-bold">Bento Card 1</span>
          </div>
          <div className="bento-card h-48 flex items-center justify-center md:col-span-2">
            <span className="text-accent-coffee font-bold">Bento Card 2 (Wide)</span>
          </div>
          <div className="bento-card h-48 flex items-center justify-center md:col-span-2">
            <span className="text-accent-blue font-bold">Bento Card 3 (Wide)</span>
          </div>
          <div className="bento-card h-48 flex items-center justify-center">
            <span className="text-accent-coffee font-bold">Bento Card 4</span>
          </div>
        </div>
      </section>
    </div>
  );
}
