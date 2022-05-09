import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint32("v1")
	.uint8("v2")
	.uint32("v3")
	.uint8("v4")
	.uint32("v5")