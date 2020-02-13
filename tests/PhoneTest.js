import Phone from '../src/js/phone';
import createDocument from './createDocument';

const chai = require('chai');

const { expect } = chai;

describe('Phone parse test', () => {
  it('Shoud return 0 if parseMask work correctly', () => {
    createDocument();
    const props = {
      mask: '+7(985)0II-**-**',
      elem: null,
      trueNumber: '+7(985)093-44-44',
    };
    const p1 = new Phone(props);
    const pm1 = p1.parseMask();
    expect(pm1).to.equal(0);
  });
  it('parseMask shoud add inputs during parsing', () => {
    createDocument();
    const props = {
      mask: '+7(985)0II-**-**',
      elem: null,
      trueNumber: '+7(985)093-44-44',
    };
    const p1 = new Phone(props);
    p1.parseMask();
    expect(p1.inputs[0].index).to.equal(8);
    expect(p1.inputs[1].index).to.equal(9);
    expect(p1.inputs[0].elem.tagName).to.equal('INPUT');
    expect(p1.inputs[1].elem.tagName).to.equal('INPUT');
  });
});
