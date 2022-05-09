import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint16("v2")
	.swstring("v3")
	.uint16("v4")
	.uint8("v5")
	.uint32("v6")
	.uint32("v7")
	.swstring("v8")
	.uint32("v9")
	.uint16("v10")
	.uint16("v11")
	.uint16("v12")
	.swstring("v13")