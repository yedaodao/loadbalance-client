# loadbalance-client

## Usage
``` javascript
import LoadBalanceClient from 'loadbalance-client';
import Consul from 'consul';

const SERVICE_NAME = 'a-service';

const consul = new Consul(/* ignore */);
const lbClient = new LoadBalanceClient(SERVICE_NAME, consul);

export function getResource(id) {
    return lbClient.get({
        url: `/${SERVICE_NAME}/v1/resources/:id`,
        params: {id: id},
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
```

## API

### new LoadBalanceClient(serviceName, consul, options)

#### serviceName

The service name.

#### consul

The consul client instance. you can see [node-consul](https://github.com/node-cloud/node-consul) for detail.

#### options

* strategy: Default is random. Others are 'round_robin_engine', 'priority_engine'.
* logger: Default is console. You can use any other logger that implements logger.log function.
* Other options you can see [node-consul](https://github.com/node-cloud/node-consul) for detail.

### lbClient.get(options)
### lbClient.post(options)
### lbClient.delete(options)
### lbClient.put(options)
### lbClient.send(options)

If you use send function, you must specific the options.method param. You can see [request](https://github.com/request/request) for detail.
