import { JSDOM } from 'jsdom';

describe('globals.css', () => {
  let dom: JSDOM;
  let document: Document;
  let body: HTMLBodyElement;
  let root: HTMLElement;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><html lang="en"><body></body></html>`);
    document = dom.window.document;
    body = document.body;
    root = document.documentElement;
    
    // Apply styles from globals.css (simulated)
    const styleSheet = `
      body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgb(250, 250, 250);
        color: rgb(36, 36, 36);
      }

      :root {
        --background: 0 0% 98%;
        --foreground: 0 0% 14%;
        --border: 0 0% 89.8%;
        --radius: 0.5rem;
      }

      .dark {
        --background: 0 0% 14%;
        --foreground: 0 0% 98%;
        --border: 0 0% 14.9%;
      }

      .box {
        width: 4rem;
        height: 4rem;
        background-color: rgb(59, 130, 246);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: transform 0.3s;
      }

      .box > svg {
        transition: transform 0.3s;
      }

      [data-state="open"] .box > svg {
        transform: rotate(180deg);
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styleSheet;
    document.head.appendChild(styleElement);
  });

  it('should set the correct font family on the body', () => {
    expect(body.style.fontFamily).toBe('Arial, Helvetica, sans-serif');
  });

  it('should set the correct root variables in light mode', () => {
    expect(root.style.getPropertyValue('--background')).toBe('0 0% 98%');
    expect(root.style.getPropertyValue('--foreground')).toBe('0 0% 14%');
    expect(root.style.getPropertyValue('--border')).toBe('0 0% 89.8%');
    expect(root.style.getPropertyValue('--radius')).toBe('0.5rem');
  });

  it('should set the correct root variables in dark mode', () => {
    root.classList.add('dark');
    expect(root.style.getPropertyValue('--background')).toBe('0 0% 14%');
    expect(root.style.getPropertyValue('--foreground')).toBe('0 0% 98%');
    expect(root.style.getPropertyValue('--border')).toBe('0 0% 14.9%');
  });

  it('should set the correct background and text colors on the body', () => {
      expect(body.style.backgroundColor).toBe('rgb(250, 250, 250)');
      expect(body.style.color).toBe('rgb(36, 36, 36)');
  });

  it('should apply the correct styling to the box class', () => {
    const box = document.createElement('div');
    box.classList.add('box');
    body.appendChild(box);

    expect(box.style.width).toBe('4rem');
    expect(box.style.height).toBe('4rem');
    expect(box.style.backgroundColor).toBe('rgb(59, 130, 246)');
    expect(box.style.display).toBe('flex');
    expect(box.style.alignItems).toBe('center');
    expect(box.style.justifyContent).toBe('center');
    expect(box.style.color).toBe('white');
    expect(box.style.transition).toBe('transform 0.3s');
  });

  it('should apply the correct SVG transition', () => {
    const box = document.createElement('div');
    box.classList.add('box');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    box.appendChild(svg)
    body.appendChild(box);

    expect(svg.style.transition).toBe('transform 0.3s');
  });

  it('should rotate the SVG correctly when data-state is open', () => {
    const box = document.createElement('div');
    box.classList.add('box');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    box.appendChild(svg)
    body.appendChild(box);
    
    box.setAttribute('data-state', 'open');
    expect(svg.style.transform).toBe('rotate(180deg)');
  });
});