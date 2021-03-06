import { helper } from '@ember/component/helper';

export function getAverage(params/*, hash*/) {
  let [books] = params;
  return books.reduce((sum, book)=> sum + book.get('price'), 0) / books.get('length');
}
export default helper(getAverage);
