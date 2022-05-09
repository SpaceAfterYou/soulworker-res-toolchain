import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint32("v2")
	.swstring("v3")
	.uint16("v4")
	.uint8("v5")
	.uint16("v6")
	.uint16("v7")
	.uint16("v8")
	.uint16("v9")
	.uint16("v10")
	.uint16("v11")
	.uint16("v12")
	.uint16("v13")
	.uint16("v14")
	.uint16("v15")
	.uint16("v16")
	.uint16("v17")