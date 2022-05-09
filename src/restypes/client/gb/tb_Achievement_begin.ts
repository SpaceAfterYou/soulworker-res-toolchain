import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint32("v1")
	.uint8("v2")
	.swstring("v3")
	.uint16("v4")
	.uint8("v5")
	.uint16("v6")
	.uint16("v7")
	.uint16("v8")
	.uint16("v9")
	.uint16("v10")
	.swstring("v11")
	.swstring("v12")
	.swstring("v13")
	.swstring("v14")
	.swstring("v15")