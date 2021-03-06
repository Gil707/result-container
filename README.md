# result-container
### Simple result container for business logic

```
Result<R, E>;

R - Success result type;
E - Error type(s)
```
Declare type of received result;
```
interface IFactory {
	make(): Result<Data, DataError>;
}
```
And then inside logic send `Success` or `Fail` class
```
class Factory implements IFactory {
...
    public make() {
      return this._ready ? new Success({...}) : new Fail({...});
    }
...
```
In service, that works with this module
```
const factory = new Factory();
const data = factory.make();

if (data.isErr()) {
	return workWithFail(data.error);
}

return workWithSuccess(data.result);
```
Alternative variant with matcher/option, (returns callback)
```
const factory = new Factory();
const data = factory.make();

match(account)(
    (result) => workWithSuccess(data),
    (e) => workWithFail(e)
);

option(account)((data) => console.log(data));
```

### Examples
`src/examples/`
* `simple-factory` - business logic with 1 level (factory);
* `factory-with-builder` - business logic with 2 levels (factory with builder inside it);
