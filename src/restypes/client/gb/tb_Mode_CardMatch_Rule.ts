import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint16("v1")
	.uint8("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.uint16("v6")
	.uint16("v7")
	.uint8("v8")
	.uint16("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")