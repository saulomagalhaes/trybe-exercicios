import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a len', () => {
		it('successfully created', async () => {
			const newFrame = await lensModel.create(lensMock);
			expect(newFrame).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('searching a len', () => {
		it('successfully found', async () => {
			const framesFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});