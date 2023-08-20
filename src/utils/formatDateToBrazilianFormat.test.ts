import { formatDateToBrazilianFormat } from '@utils/formatDateToBrazilianFormat';

describe('formatDateToBrazilianFormat', () => {
  it('should be returned date formatted in brazilian mode', () => {
    const date = formatDateToBrazilianFormat('2023-06-14')
    expect(date).toBe('14/06/2023')
  })
})