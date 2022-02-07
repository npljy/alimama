/**
 * Module dependencies.
 */

const md5 = require('md5')
const dayjs = require('dayjs')
const _ = require('lodash')

ApiClient = require('../index.js').ApiClient;

const nowDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
const appkey = '28744099'
const appsecret = '59ede7aba835b12d2c67b5e53a2cc7e3'
const commomParams = {
  appkey,
  appsecret,
  timestamp: nowDate,
  v: '2.0',
  format: 'json',
  simplify: true
}

const apiParmas = {
  url: 'https://m.tb.cn/h.fl6SRTZ?tk=Ut0H22LR64l',
  page_size: 100,
  page_no: 1,
  adzone_id: 110129450361,
  material_id: 31371
}

const params = { ...commomParams, ...apiParmas }
const paramKeys = Object.keys(params).sort()

const sign = paramKeys.reduce((s, e) => s += e + params[e], '')

commomParams.sign = md5('secret' + sign + 'secret')
commomParams['REST_URL'] = 'http://gw.api.taobao.com/router/rest'

var client = new ApiClient(commomParams);

client.execute('taobao.tbk.dg.optimus.material', apiParmas, function (error, response) {
  if (!error) console.log('taobao.tbk.tpwd.create', response);
  else console.log(error);
})