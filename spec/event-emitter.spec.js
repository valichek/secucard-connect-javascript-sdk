import EE from 'eventemitter3';
import _ from 'lodash';

import {ClientNodeEnvironment} from '../src/de.secucard.connect/client-node-environment';
import {Services} from '../src/index.js';
import {Client} from '../src/de.secucard.connect/client';

class CustomEventEmitter {
    constructor() {
        Object.assign(this, EE.prototype);
    }
}

describe("testing EventEmitter3", function () {
    var originalTimeout;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it("takes a long time", function (done) {

        let emitter = new CustomEventEmitter();
        let emitter1 = new CustomEventEmitter();

        emitter.on('customEvent', (res)=> {
            expect(res.hello).toBe('World');
            done();
        });

        emitter1.emit('customEvent', {hello: "World1"});
        emitter.emit('customEvent', {hello: "World"});

    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});