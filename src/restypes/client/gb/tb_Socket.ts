import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint8("v1")
	.uint8("v2")
	.uint8("v3")
	.uint32("v4")
	.uint32("v5")
	.uint16("v6")
	.uint32("v7")
	.uint32("v8")
	.uint16("v9")
	.uint32("v10")
	.uint32("v11")
	.uint16("v12")
	.uint32("v13")
	.uint16("v14")