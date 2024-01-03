import { vi } from 'vitest';
import rollDice from '../service/rollDice';
import rollMultipleDice from '../service/rollMultipleDice';

it('testa a função `rollMultipleDice`', () => {
  const defaultDiceSize = 20;

  vi.mock('../service/rollDice');

  (rollDice as any).mockReturnValueOnce(6)
    .mockReturnValueOnce(4);

  expect(rollMultipleDice(2, defaultDiceSize)).toEqual(10);
  expect(rollDice).toHaveBeenCalledTimes(2);
});
