const CREST_LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAEAAElEQVR42uy9d3ic1Zk+fM7b+/SiXixLtuUuGzfcsA3YmGLADgk1CQtZEsimbcJms7bTNwlJSFiyaZSQhCBTDDa2wUXulm259yZZXZo+8/Z6vj8yys/LEkL2gyxZdF+Xr0uWNKOZM+e5n/48AAxjGMMYxjCGMYxhDGMYwxjGMIYxjGEMYxjDGMYwhjGMYQxjGMMYxjCGMYxhDGMYwxjGMIYxjGEMYxjDGMYwhjGMYQxjGMMYxjCGMYxhDGMYwxjGMIYxjGEMYxjDGMYwhjGMYQxjGMMYxjCGMYz/DcDhI/j/B4TQfztDCCEaPplhDOP/KGkihDCEEPYXiAFbuXIl9nYEMYz/OdkWz/Tt/g2f87AF8L5fQAxC6A39f/ny5dRNN90UkiSJSaVSsKSkxDJNU1m2bFmw2Wzh6NGj5d+//vrrUVdXF44dOxbeffddymQy1dWrV8vOzk6+//77w2AwhMViCfPmzQtXXHFF2LJli1iyZEn44osv4tFHHw0nn3yy6HQ6WbJkSYiiiO+//77o7OxMcnJyoVAoQq/Xy7Zt2+LWW29Vh8ORnTt3hq+++koYhoG33npL2L17t9i/f7+QyWRh586d4vfff48QQmzaNMPx48ejv78/9uzZE2w2m3j//ffj8OHD8dVXXw1CCP7+/rF69Wo8+eSTYt++fcHv94vPP/88fPjhh+HcuXNx4sQJwzAMy7IoFAoxGo1s2LABb731VnjzzTfjrbfeio0bN0bTNDF8+PA4dOgQjhw5Evv27Ytnn302nHPOOQAg7HY7tm7dGhdffDF27NgRjzzyiOi6jv3798dzzz0Xtm/fHtu3b09BEMBnn30WAwYMiL1794YFCxYEYwzvvPNOnHnmmWjYsCHWrVsXpmli5syZsWXLlvjkk0/ilVdeieuvvz6uvfZaLFu2LJ555hnRNE2YTCbh6aefjhtuuCE6OjrC5/OJwWDAU089FS655BIMHDgwLrroIjF27NjYuXNnBAIBHHXUUbF7927x3HPPxbRp0+LJJ58MZ555Jn744Yf47bffxqFDh3DrrbeKpmkYhoHPfvazcfDgQdFqtbJ582Zs3bo13nvvvXj00UdjxYoVcdlll8W9994bZs+eHddee23st99+cdFFF4V77rkHAGDbtm2xdu3a+O233+Loo4+O73znO8FqtYqSkhJx6NAhLF68OJ566qlYtGhRDAaDkMvl8M0338RLL70UzzzzTLjzzjvD6XSGk08+OVatWhVXXHFFnHnmmXHjjTdGkiRUV1eHxx57LBYvXhyzZ8+OwYMHY9q0aeG+++6L7u7uOOWUU+K1116L888/Px588MFYuHBh2LZtWzjhhBOira0t+vv748ADD4zrr78+Lr744hgMBjFz5swYPHhweOSRR+Laa6+NefPmRWVlZTh16lT84Q9/iHPPPRe33npr7NixI1auXBkPPvhg3HLLLdHX1xePPfZYuO++++Lll18O27dvj5UrV8aTTz4ZF110Udx8882xYcOGYDKZ4uyzz47FixfHfffdF7/+9a8jiiLWrFkTV155ZRw9ejRuueWWmD17dixevDiuuOKK+PDDD2P16tXxzTffxMCBA+OMM86IhQsXxtKlS+Pee+8N27dvj6OOOipmzZqF7du3x9q1a+PFF1+MLVu2xM033xxPPfVUjB07Nn7xi1/E1VdfHfPnz4+77747Nm3aFCNGjIju7u7Izs6OW2+9NQ4ePBjjx4+Ptm3bYuTIkfHQQw/F9u3bY9y4cXHJJZeErVu3xqpVq2LixImxY8eO8Pb2jpUrV8Zbb70VJ554Yhx11FGxdu3amDVrVtx3332xePHi+PDDD2P79u1x5513RlVVVdTW1mLr1q3x5JNPxvTp0+O0006L4uJi/P3vf48jjjgiduzYEdu2bYvnnnsutmzZEjfffHM0NTXF7NmzY8CAAXHZZZeFXbt2xcMPPxyf/exnY/369WEwGMTtt98e7733Xvzyl7+M7du3x9KlS+PZZ58N3/72t6N///7x4IMPxrfffhv/8z//E8OHD48XX3wxrrvuuqivr4+SkhI899xzMWLEiHj66afjzTffjKqqqth///0YNGhQ7N27N0aOHBn33Xdf3HPPPfHQQw/FQw89FEOHDg0vvPBCnHnmmXHyySdHf39/HH300fHWW2/FsWPHYvLkyfH666/HZ599Fo888kjs2bMn1q1bF3fccUc899xz8eyzz8Zzzz0Xn376aRx//PFRV1eH4uJijBkzJoYMGRIrV66MZ599NlauXBkLFixAq9WKn/70p/H444/H/Pnz45RTTonNmzfHyJEjY86cOXHffffF8OHD4/33348rr7wy1qxZE8OHD4+LL744Pv7443jqqafi+eefj4suuig2b94c69evj6OPPjqee+65uPbaa2P16tXx8MMPx+zZs+Pqq6+OQYMGxbZt22LcuHFx5513xp133hmPP/54nHnmmVixYkVs3LgxlixZEg899FDcc8898eCDD8bChQvD6XQKQghVVVWxYsWKuPPOO+PBBx+M559/Pg4dOhQ///nP49///d/j+9//fvz4xz+OLVu2xBlnnBH79u0L999/fzz22GPx3nvvxTfffBOzZ8+O4uJiDAaD6OnpCbVaLQ4fPhxvvfVW3HzzzVFVVRUjRozA4sWLY/HixTF58uRYt25d3HDDDREIBBgMBmHq1KkxevTo6O/vj5UrV0ZTUzNWrVqFhQsXxjXXXBPffvtt3H333ZgxY0a0trbG7t27Y+DAgbFjx45YuHBhXHDBBTFt2rQYP358nH322fHf//3fx4QJE2LlypWxcePG2L59e/z617+O3bt3x4YNG+L111+Pz33uc3HZZZfFpk2bYvbs2TF37tw4++yz46mnnopPf/rT8fzzz8fWrVujrq4uFixYEBMnToxXXnklNm/eHNu2bYvTTz89MjIy4vbbb49vfOMbcfjw4Rg/fnx8+eWXcfjhh8fWrVtj2LBh0d/fH7NmzYq2trZ4++23Y+vWrXHLLbfE9OnTY+bMmbF9+/Z47LHHYvPmzbFt27aYMWNGtLa2xtSpU+Pmm2+OadOmxcqVK+O1116L9evXx+DBg+P999+P7du3R5IkbNmyJRYvXhxPP/10HH744VixYkXcd9998eijj8aYMWPijTfeiIcffjjGjh0bS5YsidWrV8eOHTviww8/jPnz58fkyZPj2WefjQ8//DDmzZsXAwYMiJkzZ8b8+fPjrbfeitdffz2eeOKJmDlzZuzduzeee+65ePDBB+P555+PLVu2xPLly8M111wT5557bpx55pmxY8eOGD16dHz44Yfxt7/9LR544IFYvXr12L59e2zatCkWLVoU/fr1i9WrV8fGjRvj1KlTceutt8aDDz4Y27dvj2uuuSYefvjhWL58eVx77bXx05/+NF544YVYtWpVnH322TFt2rQ4cOBA9Pf3x5YtW+K9996L999/Pz766KM4dOhQ/OpXv4rzzz8/rrvuutiyZUuMGTMmbr/99vjhhx+itbU1Pv74YxgMBnH77bfHpk2b4uCDD45LL700Zs2aFRs2bIgxY8bE8uXL48orr4zly5fHjBkz4sMPP4zXX389Jk+eHM8880z8+te/jg8//DCefPLJWL58ecydOzf27t0bq1atijnnnBNvvfVWLF68OGbNmhVff/11vPzyy/Hjjz/G2rVrY9y4cTHPPPNEx44d4bHHHovbb789Nm3aFCNGjIiFCxeGiRMnxuuvvx4LFiyI3bt3R6/Xx7PPPhtPPfVUnH766Xj77bfj7bffjsmTJ8d9990Xjz/+eLS1tcX+/ftj9OjRce6558Zf//rXuPnmm+OMM86I4uJi/PWvf40XXngh5s6dG4sWLYoVK1bE7373u2jZsmU4d+5cPPHEE7Fq1aq4/vrr4/zzz4+//OUvccopp8STTz4Zr7/+etx4443xwAMPxLPPPhtjx46NnTt3xtKlS+O0006L9evXx+LFizF8+PC4/fbbY9myZfHQQw/Fhg0b4uabb46FCxfGgAED4t13343Vq1fH/Pnz49NPP40f/vCH8eSTT8ZLL70Ujz76aKxcuTK6urqio6Mjbr755ti8eXNcc8018f7778fxxx8fTzzxRJx++unxv//3/7Fz587YunVrjBw5MtasWROPPfZYfP7553HjjTfG5MmTY+vWrbFr164YNWpUXHbZZXHPPfdEIBBAXV1dHH744fHyyy/HjBkzYuzYsfH666/HjBkzYtiwYTF79ux49tlnY86cOXHWWWeF0WgUn376aSxatCiWL18eH330Udx1112xefPmWLJkSdx7772xePHiuP/++6Oqqiref//9eP7552Pp0qXx/fffR1VVVXz44Yfx+uuvx4YNG2LlypVx9dVXx9q1a2PQoEExffr0eOedd2LlypWxdu3auP/++2P58uWxcePGGDRoUNxwww1x2223xbPPPhtTp06NQ4cOxeHDh+P111+P3bt3R5IkLFu2LB544IFYuHBh/OQnP4mTTz45Nm3aFH/84x/j5ptvjqlTp8YVV1wRixcvjlWrVsWIESPijjvuiPb29rj66qtj8uTJsWDBgliwYEH88Ic/jCuuuCIOHjwYb775Ztxyyy0xZcqUmD9/fqxYsSK6urritttui6VLl8bEiRPj+eefj8ceezyee+65WLp0acydOzfWrVsXc+fOjZkzZ8bEiRPx9NNPx9NPPx2ff/55PP744/Hwww/Hb3/72/jss89ix44d8cADD8Qpp5wS1113XaxcuTLefPPNGDduXAwYMCB27doVb7zxRkxNTcXbb78dDzzwQJxwwgnR1NQUr776asydOzc2b94cTzzxRPz+97+Po48+OjZs2BDHjh2LQ4cOxfr162PatGmxcOHCWLJkScydOzeWL18eW7dujVNOOSXuu+++mDt3bly4cCFWrVoVb775ZgwePDi2bt0aBQUFcfnll8c555wTixYtildeeaVYv359XHfddTF58uQ4fPhw7N69O44//vj45ptv4rnnnosnn3wyNm7cGJIkYdeuXeP111+PSZMmxbJly+Lpp5+OX/7yl+Pss8+OcePGxYYNG2LJkiVx6aWXxvTp0+P111+P7u7u2Lt3bzz11FNxzTXXxB133BGDBg2KMWPGxJYtW2LKlCnx7bffxvTp0+Pxxx+PSZMmxQsvvBDHjh2LZ555Jg4ePBjHjh2LgoKCmDt3bsydOzfWrFkTn3zySZx88slxySWXxIIFC+K2226L1atXx6RJk+K+++6Ld999N1auXBmvvvpqPPbYY3HppZfG/Pnz48orr4wHHnggjj766PjLX/4SP/zhD+PBBx+MZcuWxdKlS2P79u3x5z//Ob799tsYOHBg3HPPPfHJJ5/E5s2bY9GiRXH33XfHbbfdFqeddlpcc801cdVVV8XTTz8d5557buzduze+8pWvxMsvvxz9/f3R2NiIv//978f+/ftj8uTJcdlll8XatWvj6aefjscee2yceeaZ8fLLL8ezzz4bN998czz44IPx0EMPRX19fQwcODBmzJgRixYtirfeeivGjRsXb731VsyfPz8efvjhWLJkSdxwww2xcuXKuPPOO+P111+PH374IX73u9/F6NGjY8CAAbFq1ap45ZVX4rfffovzzjsvPv/888jKyoqysjJceOGF8fDDD8fTTz8dgwYNiq6urrjppptixYoV8fDDD8fll18eGzZsiMcee6wYNGhQfPjhh/Hf//3fx4IFC2LJkiXxzDPPxAMPPBDXX3993HDDDWEYBp577rlYtWpV/O///m8ce+yx+Otf/xqLFi2K8vLyWLt2bVx66aUxYcKEeOutt6K0tDSWLl0a06dPj0mTJsW6devi5JNPjm3btkVLS0t85zvfie7u7rj33ntj9OjRcc0118Qpp5wS3/zmN+P111+P66+/PiZNmhSDBw+OhQsXxtNPPx2XL18ex48fj4svvjiiKIq77747nnjiibj66qtj8+bNcfPNN8f27dujo6MjFixYEGvWrImFCxfG8ePHx0UXXRSrV6+OzZs3x/Tp06O9vT22b98e+fn5ceedd8YTTzwR8+bNiwsuuCC2bt0ahw8fjr1798aAAQNi7ty5sWHDhrj99tvj5ptvjiVLlsTJJ58cr7zySjz00ENx7LHHxtKlS+Pzzz+PZ555Jj788MOorKxM3nzzzaioqoowGo0YMGBA7N69O0aPHh1TpkxBUlISzzzzTCxYsCB27doVt912W7z22mvx6KOPxj333BNr1qyJpUuXxgcffBC33XZb3HXXXWEYBsrLy+PDDz+M8ePHx5kzZ8b69evj4IMPjo0bN8aWLVvi8ccfjxkzZsSYMWNi2LBh8corr8TcuXPj5ptvjqlTp0YikYjPP/88Pvroo+jq6oqFCxfG0aNHY+zYsTHixAnx4IMPxvTp0+Pxxx+PVatWxUcfffQ8/1dEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWv8f7klT4DCP4k1AAAAAElFTkSuQmCC";

const MenuIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ArrowRightIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WandIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 6.2l1.4-1.4" />
    <path d="M17.8 11.8l1.4 1.4" />
    <path d="M12.2 6.2l-1.4-1.4" />
    <path d="M3 21l9.4-9.4" />
    <path d="M14.5 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  </svg>
);

const BookIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --font-display: 'Poppins', sans-serif;
    --font-serif: 'Source Serif 4', serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: var(--font-display);
    overflow: hidden;
    background: #050505;
  }

  .liquid-glass {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.12);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
  }

  .liquid-glass-strong {
    background: rgba(255,255,255,0.045);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    border: 1px solid rgba(255,255,255,0.14);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 50px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
  }

  .root {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #050505;
  }

  .video-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .video-tint {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(circle at center top, rgba(255,255,255,0.06), transparent 30%),
      linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.28)),
      linear-gradient(135deg, rgba(0,0,0,0.32), rgba(22,22,22,0.18) 45%, rgba(70,70,70,0.14));
  }

  .panels {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .left-panel {
    width: 54%;
    height: 100%;
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .left-glass-overlay {
    position: absolute;
    inset: 1.5rem;
    border-radius: 1.75rem;
    z-index: 0;
  }

  .left-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.85rem 1rem;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    min-width: 0;
  }

  .nav-logo-image {
    width: 52px;
    height: auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 0 12px rgba(255,255,255,0.15));
    flex-shrink: 0;
  }

  .nav-brand {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.05rem, 1.5vw, 1.25rem);
    letter-spacing: -0.04em;
    color: white;
    white-space: nowrap;
  }

  .menu-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.45rem 0.95rem;
    border-radius: 9999px;
    border: none;
    background: transparent;
    color: white;
    font-family: var(--font-display);
    font-size: 0.82rem;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .menu-btn:hover { transform: scale(1.04); }

  .hero-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
  }

  .hero-logo {
    width: min(34vw, 260px);
    max-width: 260px;
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
    animation-delay: 0.2s;
  }

  .hero-logo-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 0 28px rgba(255,255,255,0.16));
  }

  .hero-h1 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.04;
    letter-spacing: -0.055em;
    color: white;
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
    animation-delay: 0.35s;
  }

  .hero-h1 em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,0.82);
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.72rem 1.4rem 0.72rem 1rem;
    border-radius: 9999px;
    border: none;
    background: transparent;
    color: white;
    font-family: var(--font-display);
    font-size: 0.86rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.2s ease;
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
    animation-delay: 0.5s;
  }

  .cta-btn:hover { transform: scale(1.04); }

  .cta-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.14);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
    animation-delay: 0.65s;
  }

  .pill {
    padding: 0.38rem 0.92rem;
    border-radius: 9999px;
    font-size: 0.72rem;
    color: rgba(255,255,255,0.84);
    letter-spacing: 0.02em;
  }

  .bottom-quote {
    padding: 1rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
    animation-delay: 0.8s;
  }

  .quote-label {
    font-size: 0.64rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.52);
  }

  .quote-text {
    font-size: 0.97rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.86);
  }

  .quote-text .serif {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,0.72);
  }

  .quote-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.2rem;
  }

  .author-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }

  .author-name {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.54);
  }

  .right-panel {
    width: 46%;
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    .right-panel { display: flex; }
  }

  .right-top {
    display: flex;
    justify-content: flex-end;
  }

  .contact-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.58rem 0.95rem;
    border-radius: 9999px;
    color: rgba(255,255,255,0.94);
    text-decoration: none;
    font-size: 0.73rem;
    transition: transform 0.2s ease;
  }

  .contact-pill:hover { transform: scale(1.04); }

  .contact-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.78);
    box-shadow: 0 0 12px rgba(255,255,255,0.32);
    flex-shrink: 0;
  }

  .community-card {
    width: 17rem;
    padding: 1rem;
    border-radius: 1rem;
    align-self: flex-end;
  }

  .community-title {
    font-size: 0.82rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.36rem;
  }

  .community-desc {
    font-size: 0.66rem;
    line-height: 1.55;
    color: rgba(255,255,255,0.62);
  }

  .feature-section {
    margin-top: auto;
    padding: 1rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .feature-row {
    display: flex;
    gap: 0.75rem;
  }

  .feature-card {
    flex: 1;
    padding: 1.05rem;
    border-radius: 1.35rem;
    display: flex;
    flex-direction: column;
    gap: 0.62rem;
  }

  .feature-icon-wrap {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.11);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.72);
  }

  .feature-title {
    font-size: 0.76rem;
    font-weight: 500;
    color: white;
  }

  .feature-desc {
    font-size: 0.63rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.55);
  }

  .bottom-card {
    padding: 0.9rem 1rem;
    border-radius: 1.35rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .thumb-logo {
    width: 92px;
    height: 60px;
    border-radius: 0.8rem;
    background: rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
  }

  .thumb-logo img {
    width: 86%;
    height: auto;
    display: block;
    opacity: 0.92;
  }

  .bottom-card-content {
    flex: 1;
    min-width: 0;
  }

  .bottom-card-title {
    font-size: 0.76rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.2rem;
  }

  .bottom-card-desc {
    font-size: 0.62rem;
    line-height: 1.42;
    color: rgba(255,255,255,0.54);
  }

  .plus-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.74);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 1023px) {
    .left-panel {
      width: 100%;
    }

    .hero-logo {
      width: min(50vw, 240px);
    }
  }

  @media (max-width: 640px) {
    .left-panel {
      padding: 1rem;
    }

    .left-glass-overlay {
      inset: 1rem;
    }

    .nav, .hero-center, .bottom-quote {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .nav-logo-image {
      width: 44px;
    }

    .nav-brand {
      font-size: 1rem;
    }

    .hero-logo {
      width: min(58vw, 220px);
    }

    .hero-h1 {
      font-size: clamp(2.15rem, 9vw, 3.05rem);
    }

    .pill {
      font-size: 0.66rem;
    }
  }
`;

export default function CreatorsCompassLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="root">
        <video
          className="video-bg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-tint" />

        <div className="panels">
          <div className="left-panel">
            <div className="left-glass-overlay liquid-glass-strong" />

            <div className="left-content">
              <nav className="nav">
                <div className="nav-logo">
                  <img className="nav-logo-image" src={CREST_LOGO} alt="Creator's Compass logo" />
                  <span className="nav-brand">Creator&apos;s Compass</span>
                </div>

                <button className="menu-btn liquid-glass" style={{ borderRadius: '9999px' }}>
                  <MenuIcon size={14} />
                  Menu
                </button>
              </nav>

              <div className="hero-center">
                <div className="hero-logo">
                  <img className="hero-logo-image" src={CREST_LOGO} alt="Creator's Compass crest" />
                </div>

                <h1 className="hero-h1">
                  Guiding creators toward the <br />
                  <em>right partners for the vision</em>
                </h1>

                <button className="cta-btn liquid-glass-strong" style={{ borderRadius: '9999px' }}>
                  <div className="cta-icon">
                    <ArrowRightIcon size={13} />
                  </div>
                  Start the Conversation
                </button>

                <div className="pills">
                  {['Creative Partnerships', 'Vision Strategy', 'Project Facilitation'].map((label) => (
                    <div key={label} className="pill liquid-glass">
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bottom-quote">
                <div className="quote-label">Creator-Led Consulting</div>
                <div className="quote-text">
                  We help creators clarify the destination, align the right collaborators, and move ideas from <span className="serif">spark to reality.</span>
                </div>
                <div className="quote-author">
                  <div className="author-line" />
                  <span className="author-name">Creator&apos;s Compass</span>
                  <div className="author-line" />
                </div>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="right-top">
              <a className="contact-pill liquid-glass" href="mailto:bg@creatorscompass.net">
                <span className="contact-dot" />
                bg@creatorscompass.net
              </a>
            </div>

            <div className="community-card liquid-glass">
              <div className="community-title">A strategic partner for bold creative work</div>
              <div className="community-desc">
                Creator&apos;s Compass connects artists, brands, producers, and operators so each project has the right people behind it from the start.
              </div>
            </div>

            <div className="feature-section liquid-glass">
              <div className="feature-row">
                <div className="feature-card liquid-glass">
                  <div className="feature-icon-wrap">
                    <WandIcon size={15} />
                  </div>
                  <div className="feature-title">Vision Mapping</div>
                  <div className="feature-desc">
                    We translate creative ideas into clear direction, scope, and partnership needs.
                  </div>
                </div>

                <div className="feature-card liquid-glass">
                  <div className="feature-icon-wrap">
                    <BookIcon size={15} />
                  </div>
                  <div className="feature-title">Partner Alignment</div>
                  <div className="feature-desc">
                    We identify the collaborators, vendors, and strategic allies best suited to bring the work to life.
                  </div>
                </div>
              </div>

              <div className="bottom-card liquid-glass">
                <div className="thumb-logo">
                  <img src={CREST_LOGO} alt="" aria-hidden="true" />
                </div>

                <div className="bottom-card-content">
                  <div className="bottom-card-title">Facilitated Execution</div>
                  <div className="bottom-card-desc">
                    From introductions to momentum, we help keep the right creative team moving in the same direction.
                  </div>
                </div>

                <button className="plus-btn liquid-glass" style={{ borderRadius: '50%' }}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
