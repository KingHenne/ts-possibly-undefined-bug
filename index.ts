import { doc } from './doc';

// Compiler error with TS 2.1.4 and strictNullChecks:
const body = doc && doc.body;

// No compiler error:
const doc2 = typeof document === 'undefined' ? undefined : document;
const body2 = doc2 && doc2.body;
