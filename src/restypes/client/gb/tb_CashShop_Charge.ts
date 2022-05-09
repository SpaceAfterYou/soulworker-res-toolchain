import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint32("v1")
	.uint32("v2")
	.uint32("v3")
	.swstring("v4")
	.uint16("v5")
	.uint8("v6")
	.uint16("v7")
	.uint16("v8")
	.uint16("v9")
	.uint16("v10")
	.uint16("v11")
	.uint32("v12")
	.uint32("v13")