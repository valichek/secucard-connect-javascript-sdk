import TestPromise from 'jasmine-es6/helpers/promise';
import {catchError} from 'jasmine-es6';
import install from 'jasmine-es6/overrides/async';
import {Promise as ES6Promise} from 'es6-promise';

import {Rest} from '../src/de.secucard.connect/net/rest';
import {Message, HEAD, GET, POST, PUT, DELETE} from '../src/de.secucard.connect/net/message';
import {Client} from '../src/de.secucard.connect/client';
import {ClientConfig} from '../src/de.secucard.connect/client-config';
import devCredentials from './support/dev-credentials.json';

import {Channel} from '../src/de.secucard.connect/net/channel'
import {ProductService} from '../src/de.secucard.connect/product/product-service'

install();

describe('Product Service', function() {
	
	beforeEach('', async function () {
		
		let client = Client.create();
		client.setCredentials(devCredentials);
		
		let service = new ProductService();
		service.configureWithContext(client.context);
		service.getChannel = client.context.getRestChannel.bind(client.context);
		
		service.getEndpoint = () => {
			return ['General','Accounts']
		};
		
		client.service = service;
		
		this.client = client;
		
	});
	
	it('checks Service Channel' , async function() {
		
		let ch = this.client.service.getChannel();
		expect(ch === this.client.context.getRestChannel()).toBe(true);
		
		let endpoint = this.client.service.getEndpoint();
		expect(ch.buildEndpoint(endpoint) == 'General/Accounts');
		
		
	});
	
	it('sends Rest API GET Message' , async function() {
		
		let params = {
			endpoint: this.client.service.getEndpoint(), 
			options: {}
		};
		
		let ch = this.client.service.getChannel();
		let message = ch.createMessageForRequest(Channel.METHOD.GET, params);
		
		expect(message.url == 'General/Accounts').toBe(true);
		
		let status;
		await ch.sendWithToken(message).then((res)=>{
			
			status = res.status;
			
		});
		
		expect(status).toBe(200);
		
	});
	
	it('gets Auth error from Rest API GET Message' , async function() {
		
		
		let wrongCredentials = Object.assign({}, devCredentials);
		wrongCredentials.client_id = "dscs";
		wrongCredentials.client_secret = "cdcds";
		
		this.client.setCredentials(wrongCredentials);
		
		
		let params = {
			endpoint: this.client.service.getEndpoint(), 
			options: {}
		};
		
		let ch = this.client.service.getChannel();
		let message = ch.createMessageForRequest(Channel.METHOD.GET, params);
		
		let error;
		await ch.sendWithToken(message)
			.then((res)=>{
			}).catch((err) => {
				error = err
			});
		
		expect(Boolean(error)).toBe(true);
		
	});
	
	it('sets wrong credentials and gets Auth error from Product Service' , async function() {
		
		let data;
		await this.client.service.getObjectList({}, null).then((res) => {
			
			data = res.data;
			
		});
		
		expect(Boolean(data)).toBe(true);
		
		let wrongCredentials = Object.assign({}, devCredentials);
		wrongCredentials.client_id = "dscs";
		wrongCredentials.client_secret = "cdcds";
		
		this.client.setCredentials(wrongCredentials);
		
		let error;
		await this.client.service.getObjectList({}, null)
			.catch((err) => {
				error = err;
			});
		
		expect(Boolean(error)).toBe(true);
		
	});
	
	it('gets object list from Product Service' , async function() {
		
		let data;
		await this.client.service.getObjectList({}, null).then((res) => {
			
			data = res.data;
			
		});
		
		expect(Boolean(data)).toBe(true);
		
	});
	
	
});