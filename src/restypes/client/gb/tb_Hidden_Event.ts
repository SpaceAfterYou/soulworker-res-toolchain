import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint32("v1")
	.uint32("v2")
	.uint32("v3")
	.uint32("v4")
	.uint32("v5")
	.uint16("v6")
	.uint16("v7")
	.uint16("v8")
	.uint16("v9")
	.uint16("v10")
	.uint32("v11")
	.uint8("v12")