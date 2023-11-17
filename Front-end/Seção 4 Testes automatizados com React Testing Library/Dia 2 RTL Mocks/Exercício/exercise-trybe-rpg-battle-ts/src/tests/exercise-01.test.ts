import { vi } from 'vitest';
import rollDice from '../service/rollDice';

it('testa a função `rollDice`', () => {
  const defaultDiceSize = 20;
  vi.spyOn(global.Math, 'random').mockReturnValue(0.8);
  expect(rollDice(defaultDiceSize)).toEqual(16);
  expect(Math.random).toHaveBeenCalledTimes(1);
});
