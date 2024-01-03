import { vi } from 'vitest';
import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

vi.mock('../service/rollMultipleDice');

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

beforeEach(() => {
  vi.resetAllMocks();
});

it('testa uma vitória na função `attackEnemy`', () => {
  (rollMultipleDice as any).mockReturnValueOnce(40);
  const resultObj = attackEnemy(2, 20, enemy);
  expect(resultObj.success).toBe(true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  (rollMultipleDice as any).mockReturnValueOnce(20);
  const resultObj = attackEnemy(2, 20, enemy);
  expect(resultObj.success).toBe(false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  (rollMultipleDice as any).mockReturnValueOnce(30);
  const resultObj = attackEnemy(2, 20, enemy);
  expect(resultObj.success).toBe(false);
});
