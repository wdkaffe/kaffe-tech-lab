import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Live Brew Status Component', () => {
  const componentsDir = path.join(process.cwd(), 'components');
  const hooksDir = path.join(process.cwd(), 'hooks');
  
  it('should have LiveBrewStatus component', () => {
    expect(fs.existsSync(path.join(componentsDir, 'LiveBrewStatus.tsx'))).toBe(true);
  });

  it('should have useBrewData hook', () => {
    expect(fs.existsSync(path.join(hooksDir, 'useBrewData.ts'))).toBe(true);
  });

  it('should use framer-motion for animations', () => {
    const content = fs.readFileSync(path.join(componentsDir, 'LiveBrewStatus.tsx'), 'utf8');
    expect(content).toContain('framer-motion');
    expect(content).toContain('AnimatePresence');
  });

  it('should integrate the hook into the component', () => {
    const content = fs.readFileSync(path.join(componentsDir, 'LiveBrewStatus.tsx'), 'utf8');
    expect(content).toContain('useBrewData');
  });

  it('should be integrated in page.tsx', () => {
    const pageContent = fs.readFileSync(path.join(process.cwd(), 'app', 'page.tsx'), 'utf8');
    expect(pageContent).toContain('<LiveBrewStatus />');
  });

  it('should have the requested metrics display', () => {
    const content = fs.readFileSync(path.join(componentsDir, 'LiveBrewStatus.tsx'), 'utf8');
    expect(content).toContain('Temp');
    expect(content).toContain('Time');
    expect(content).toContain('Yield');
    expect(content).toContain('Flow');
  });
});

describe('useBrewData Hook Logic', () => {
  const hookPath = path.join(process.cwd(), 'hooks', 'useBrewData.ts');
  const hookContent = fs.readFileSync(hookPath, 'utf8');

  it('should have a simulation interval', () => {
    expect(hookContent).toContain('setInterval');
  });

  it('should increment time during brewing', () => {
    expect(hookContent).toContain('prev.time + 1');
  });

  it('should update yield based on flow rate', () => {
    expect(hookContent).toContain('prev.yield + newFlowRate');
  });

  it('should have a startBrewing function', () => {
    expect(hookContent).toContain('const startBrewing =');
  });
});
