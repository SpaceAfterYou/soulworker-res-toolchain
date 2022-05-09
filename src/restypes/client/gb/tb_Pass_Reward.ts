import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint32("v3")
	.uint32("v4")
	.uint16("v5")
	.uint32("v6")
	.uint16("v7")