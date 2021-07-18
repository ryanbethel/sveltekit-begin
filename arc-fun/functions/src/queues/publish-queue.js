let aws = require('aws-sdk')
let ledger = {}

module.exports = function liveFactory (arc) {
  return function live ({ name, payload, delaySeconds, groupID }, callback) {

    function publish (QueueUrl, payload, callback) {
      let sqs = new aws.SQS
      let params = {
        QueueUrl,
        DelaySeconds: delaySeconds || 0,
        MessageBody: JSON.stringify(payload)
      }
      if (QueueUrl.endsWith('.fifo')) {
        params.MessageGroupId = groupID || name
      }
      sqs.sendMessage(params, callback)
    }

    function cacheLedgerAndPublish (serviceMap) {
      ledger = serviceMap.queues
      if (!ledger[name]) callback(ReferenceError(`${name} queue not found`))
      else publish(ledger[name], payload, callback)
    }

    let arn = ledger[name]
    if (arn) {
      publish(ledger[name], payload, callback)
    }
    else {
      arc.services().then(cacheLedgerAndPublish).catch(callback)
    }
  }
}
