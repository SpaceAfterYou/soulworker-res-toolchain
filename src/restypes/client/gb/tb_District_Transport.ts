import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint16("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.uint16("v6")
	.uint8("v7")
	.uint8("v8")
	.uint8("v9")
	.uint8("v10")
	.uint8("v11")