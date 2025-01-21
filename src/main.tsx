import { createRoot } from 'react-dom/client';

import App from '~/App';
import Providers from '~/components/Providers';

import '~/styles/global.css';

createRoot(document.getElementById('root')!).render(
	<Providers>
		<App />
	</Providers>
);
