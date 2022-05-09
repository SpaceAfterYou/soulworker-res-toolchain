import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint32("v2")
	.uint32("v3")
	.uint32("v4")
	.uint8("v5")
	.uint32("v6")
	.int16("v7")
	.int16("v8")
	.int16("v9")
	.int16("v10")
	.int16("v11")
	.uint32("v12")
	.uint32("v13")
	.uint32("v14")
	.uint32("v15")
	.uint32("v16")