import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint8("v0")
	.uint32("v1")
	.uint8("v2")
	.uint16("v3")
	.swstring("v4")
	.uint16("v5")
	.uint16("v6")
	.uint8("v7")
	.uint16("v8")
	.uint16("v9")
	.swstring("v10")
	.uint16("v11")
	.uint16("v12")
	.swstring("v13")
	.swstring("v14")