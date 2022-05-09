import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint8("v1")
	.swstring("v2")
	.uint16("v3")
	.swstring("v4")
	.uint16("v5")
	.swstring("v6")
	.uint32("v7")
	.swstring("v8")
	.swstring("v9")
	.uint16("v10")
	.uint16("v11")
	.uint16("v12")
	.uint32("v13")
	.uint32("v14")