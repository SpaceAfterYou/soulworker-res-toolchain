import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint32("v1")
	.uint32("v2")
	.uint8("v3")
	.uint8("v4")
	.uint32("v5")
	.uint16("v6")