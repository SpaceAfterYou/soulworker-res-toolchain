import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.swstring("v1")
	.uint32("v2")
	.swstring("v3")