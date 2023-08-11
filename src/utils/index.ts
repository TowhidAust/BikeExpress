const PromiseHandler = (promise: Promise<any>) => {
	return promise.then((data: any) => [data, undefined]).catch((error: any) => Promise.resolve([undefined, error]));
};

export { PromiseHandler };
