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
public make() {
  return this._ready ? new Success({...}) : new Fail({...});
}
```
