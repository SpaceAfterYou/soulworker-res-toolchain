import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.int32("v1")
	.uint8("v2")
	.uint8("v3")