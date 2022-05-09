import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.uint16("v4")
	.uint32("v5")
	.uint16("v6")