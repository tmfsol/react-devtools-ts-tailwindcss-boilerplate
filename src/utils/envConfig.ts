import { z } from 'zod';

const schema = z.object({
	MODE: z.enum(['development', 'production']),

	VITE_SECURE_LOCAL_STORAGE_HASH_KEY: z.string(),
	VITE_SECURE_LOCAL_STORAGE_DISABLED_KEYS: z.string()
});

const env = schema.safeParse({
	// # -----------------------------------------------------------------------------
	// # Vite
	// # -----------------------------------------------------------------------------
	MODE: import.meta.env.MODE,

	// # -----------------------------------------------------------------------------
	// # https://www.npmjs.com/package/react-secure-storage
	// # -----------------------------------------------------------------------------
	VITE_SECURE_LOCAL_STORAGE_HASH_KEY: import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY,
	VITE_SECURE_LOCAL_STORAGE_DISABLED_KEYS: import.meta.env.VITE_SECURE_LOCAL_STORAGE_DISABLED_KEYS
});

if (!env.success) {
	console.error(env.error.issues);
	throw new Error('Giá trị các biến môi trường không hợp lệ');
}

const envConfig = env.data;

export default envConfig;
