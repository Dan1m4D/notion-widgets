import WidgetPreview from "../components/WidgetPreview";
import { widgets } from "../widgets";

export default function LandingPage() {
  const baseUrl = window.location.origin;

  return (
    <main className="min-h-screen bg-[#090a0f] text-white">
      {/* Pixel grid */}

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Header */}

      <header className="border-b-2 border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-pixel text-xs">
            PIXEL
            <span className="text-[#ffe600]">
              WIDGETS
            </span>
          </div>

          <div className="font-pixel text-[7px] text-gray-600">
            FOR NOTION
          </div>
        </div>
      </header>

      {/* Hero */}

      <section className="px-6 pb-20 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-pixel text-3xl leading-[1.7] sm:text-5xl">
            NOTION
            <br />

            <span className="text-[#ffe600]">
              PIXEL
            </span>

            <br />

            WIDGETS
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            A collection of small pixel-art widgets
            designed to bring some personality to
            your Notion workspace.
          </p>

          <div className="mt-8 font-pixel text-[7px] text-gray-700">
            ↓ SCROLL TO EXPLORE ↓
          </div>
        </div>
      </section>

      {/* Widgets */}

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-pixel text-[8px] text-[#ffe600]">
              // WIDGETS
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {widgets.map((widget) => (
              <WidgetPreview
                key={widget.id}
                name={widget.name}
                description={widget.description}
                url={`${baseUrl}${widget.path}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}

      <section className="border-t-2 border-white/10 bg-[#0d0e14] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-pixel text-sm text-[#ffe600]">
            // HOW TO USE
          </div>

          <h2 className="mt-4 font-pixel text-xl">
            THREE STEPS
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "CHOOSE", "Find a widget you like."],
              ["02", "COPY", "Copy its embed URL."],
              ["03", "PASTE", "Paste it into a Notion page."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="border-2 border-white/10 bg-[#090a0f] p-6 text-left"
              >
                <div className="font-pixel text-sm text-[#ffe600]">
                  {number}
                </div>

                <h3 className="mt-6 font-pixel text-sm">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t-2 border-white/10 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <span className="font-pixel text-[7px] text-gray-700">
            dan1m4d © 2026
          </span>
        </div>
      </footer>
    </main>
  );
}