
import { Container, decorate, injectable } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';
import { Controller } from 'tsoa';

const iocContainer = new Container(
	{
		autoBindInjectable: true,
		skipBaseClassChecks: true,
	},
);

decorate(injectable(), Controller); // Makes tsoa's Controller injectable

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

export { iocContainer };
