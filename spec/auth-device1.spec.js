import TestPromise from 'jasmine-es6/helpers/promise';
import {catchError} from 'jasmine-es6';
import install from 'jasmine-es6/overrides/async';
import {Promise as ES6Promise} from 'es6-promise';
import _ from 'lodash';

import {Rest} from '../src/de.secucard.connect/net/rest'
import {Message, HEAD, GET, POST, PUT, DELETE} from '../src/de.secucard.connect/net/message'
import {Client} from '../src/de.secucard.connect/client'
import {ClientConfig} from '../src/de.secucard.connect/client-config'
import {Auth} from '../src/de.secucard.connect/auth/auth'
import devCredentials from './support/dev-credentials.json'
import devCredentialsRefreshToken from './support/dev-credentials-refresh-token.json'
import devCredentialsDevice from './support/dev-credentials-device.json'
import {Token} from '../src/de.secucard.connect/auth/token'

import {ClientNodeEnvironment} from '../src/de.secucard.connect/client-node-environment';

install();

describe('Device Authorization. Obtain code', function () {

    beforeEach('', async function () {

        let client = Client.create({
            oAuthUrl: 'https://connect-dev10.secupay-ag.de/oauth/',
            stompHost: 'connect-dev10.secupay-ag.de'
        }, ClientNodeEnvironment);

        this.client = client;
        this.auth = client.context.getAuth();
        this.ch = client.context.getRestChannel();
    });

    afterEach(function () {

    });


    it('tries to get Code for the device and get Token for that code with no success', async function () {

        // we cannot test it to get 200 because there is an user_code verification step on device
        let status = 'getToken never called';

        // first send wrong data
        let cr = _.assign({}, devCredentialsDevice, {uuid: "/vendor/secucard/parameter1/test1/parameter2/test2"});
        let pr = this.auth._tokenDeviceCodeRequest(cr, this.ch);

        let code = null;
        await pr.then((res) => {
            status = res.status;
            console.log(res.body);
            code = res.body.device_code;
        }).catch((err)=> {
            status = err.status;
            console.log(err.response.body);
        });

        expect(status).toBe(200);

        cr = _.assign({}, devCredentialsDevice, {code: code});
        pr = this.auth._tokenDeviceRequest(cr, this.ch);

        await pr.then((res) => {
            status = res.status;
            console.log(res.body);
        }).catch((err)=> {
            status = err.status;
            console.log(err.response.body);
        });

        expect(status).toBe(401);

    });

});