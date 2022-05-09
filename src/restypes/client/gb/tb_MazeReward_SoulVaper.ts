import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.uint16("v2")
	.swstring("v3")
	.uint32("v4")
	.swstring("v5")
	.swstring("v6")
	.uint16("v7")
	.uint16("v8")
	.uint16("v9")
	.uint32("v10")
	.uint32("v11")