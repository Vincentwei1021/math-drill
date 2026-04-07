export type Operation = "+" | "-" | "×" | "÷";

export interface Problem {
  a: number;
  b: number;
  op: Operation;
  answer: number;
}

export interface GeneratorConfig {
  operations: Operation[];
  min: number;
  max: number;
  count: number;
  noCarry: boolean;
  noRemainder: boolean;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hasCarry(a: number, b: number): boolean {
  while (a > 0 || b > 0) {
    if ((a % 10) + (b % 10) >= 10) return true;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  return false;
}

function hasBorrow(a: number, b: number): boolean {
  while (a > 0 || b > 0) {
    if ((a % 10) < (b % 10)) return true;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  return false;
}

function generateAddition(config: GeneratorConfig): Problem {
  const maxAttempts = 200;
  for (let i = 0; i < maxAttempts; i++) {
    const a = randInt(config.min, config.max);
    const b = randInt(config.min, config.max);
    const answer = a + b;
    if (answer > config.max) continue;
    if (config.noCarry && hasCarry(a, b)) continue;
    return { a, b, op: "+", answer };
  }
  const a = randInt(config.min, Math.floor(config.max / 2));
  const b = randInt(config.min, Math.floor(config.max / 2));
  return { a, b, op: "+", answer: a + b };
}

function generateSubtraction(config: GeneratorConfig): Problem {
  const maxAttempts = 200;
  for (let i = 0; i < maxAttempts; i++) {
    const a = randInt(config.min + 1, config.max);
    const b = randInt(config.min, a);
    if (config.noCarry && hasBorrow(a, b)) continue;
    return { a, b, op: "-", answer: a - b };
  }
  const a = randInt(config.min + 1, config.max);
  const b = randInt(config.min, a);
  return { a, b, op: "-", answer: a - b };
}

function generateMultiplication(config: GeneratorConfig): Problem {
  const limit = Math.floor(Math.sqrt(config.max));
  const effectiveMax = Math.max(limit, 2);
  const a = randInt(Math.max(config.min, 1), effectiveMax);
  const b = randInt(Math.max(config.min, 1), effectiveMax);
  return { a, b, op: "×", answer: a * b };
}

function generateDivision(config: GeneratorConfig): Problem {
  const maxAttempts = 200;
  for (let i = 0; i < maxAttempts; i++) {
    const b = randInt(Math.max(config.min, 1), Math.min(config.max, 12));
    const quotient = randInt(1, Math.floor(config.max / Math.max(b, 1)));
    if (quotient < 1) continue;
    const a = b * quotient;
    if (a > config.max || a < config.min) continue;
    return { a, b, op: "÷", answer: quotient };
  }
  return { a: 6, b: 2, op: "÷", answer: 3 };
}

export function generateProblems(config: GeneratorConfig): Problem[] {
  const problems: Problem[] = [];
  const ops = config.operations.length > 0 ? config.operations : ["+"] as Operation[];

  for (let i = 0; i < config.count; i++) {
    const op = ops[Math.floor(Math.random() * ops.length)];
    let problem: Problem;

    switch (op) {
      case "+":
        problem = generateAddition(config);
        break;
      case "-":
        problem = generateSubtraction(config);
        break;
      case "×":
        problem = generateMultiplication(config);
        break;
      case "÷":
        problem = generateDivision(config);
        break;
    }

    problems.push(problem);
  }

  return problems;
}
