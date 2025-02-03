import { createRoot } from 'react-dom/client';

import '~/styles/global.scss';

import App from '~/App';
import Providers from '~/components/Providers';

createRoot(document.getElementById('root')!).render(
	<Providers>
		<App />
	</Providers>
);
