import React, { useState } from 'react';

export default function QuadraticSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [roots, setRoots] = useState(null);

  const calculateRoots = (e) => {
    e.preventDefault();
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setRoots('Введите корректные значения для a, b и c.');
      return;
    }

    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setRoots(`Корни уравнения: x1 = ${root1}, x2 = ${root2}`);
    } else if (discriminant === 0) {
      const root = -bNum / (2 * aNum);
      setRoots(`Уравнение имеет один корень: x = ${root}`);
    } else {
      setRoots('Уравнение не имеет действительных корней.');
    }
  };

  return (
    <div>
      <h2>Решение квадратного уравнения</h2>
      <form onSubmit={calculateRoots}>
        <div>
          <label>
            a:
            <input 
              type="number" 
              value={a} 
              onChange={(e) => setA(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            b:
            <input 
              type="number" 
              value={b} 
              onChange={(e) => setB(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            c:
            <input 
              type="number" 
              value={c} 
              onChange={(e) => setC(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Рассчитать корни</button>
      </form>
      {roots && <p>{roots}</p>}
    </div>
  );
}
