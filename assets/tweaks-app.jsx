/* Tweaks panel for VenueSumo Reviews page.
   Tweaks: accent color, density, hero variant, mascot on/off, source badge style. */

function ReviewsTweaks() {
  const defaults = window.__TWEAK_DEFAULTS || {
    accent: 'yellow',
    density: 'standard',
    hero: 'navy',
    mascot: true,
  };
  const [t, setT] = window.useTweaks(defaults);

  // Apply tweaks → body classes
  React.useEffect(() => {
    const b = document.body;
    b.classList.toggle('accent-blue', t.accent === 'blue');
    b.classList.toggle('density-compact',  t.density === 'compact');
    b.classList.toggle('density-spacious', t.density === 'spacious');
    b.classList.toggle('hero-light', t.hero === 'light');
    b.classList.toggle('no-mascot', !t.mascot);
  }, [t.accent, t.density, t.hero, t.mascot]);

  const TP   = window.TweaksPanel;
  const Sec  = window.TweakSection;
  const R    = window.TweakRadio;
  const Tg   = window.TweakToggle;

  return (
    <TP title="Tweaks">
      <Sec label="Accent color">
        <R
          label="Brand pop"
          value={t.accent}
          options={[
            { label: 'Yellow', value: 'yellow' },
            { label: 'Blue',   value: 'blue'   },
          ]}
          onChange={(v) => setT('accent', v)}
        />
      </Sec>

      <Sec label="Hero style">
        <R
          label="Background"
          value={t.hero}
          options={[
            { label: 'Navy',  value: 'navy'  },
            { label: 'Light', value: 'light' },
          ]}
          onChange={(v) => setT('hero', v)}
        />
      </Sec>

      <Sec label="Review wall density">
        <R
          label="Card spacing"
          value={t.density}
          options={[
            { label: 'Compact',  value: 'compact'  },
            { label: 'Standard', value: 'standard' },
            { label: 'Spacious', value: 'spacious' },
          ]}
          onChange={(v) => setT('density', v)}
        />
      </Sec>

      <Sec label="Mascot">
        <Tg
          label="Show sumo mascot"
          value={t.mascot}
          onChange={(v) => setT('mascot', v)}
        />
      </Sec>
    </TP>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<ReviewsTweaks />);
