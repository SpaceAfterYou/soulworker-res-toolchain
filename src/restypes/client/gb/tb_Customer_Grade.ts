import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint8("v2")
	.uint16("v3")
	.uint8("v4")
	.uint32("v5")
	.uint8("v6")
	.uint32("v7")
	.uint32("v8")
	.uint32("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")