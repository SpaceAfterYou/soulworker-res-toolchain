import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.int32("v0")
	.int32("v1")
	.swstring("v2")
	.uint32("v3")
	.int32("v4")
	.uint32("v5")
	.uint32("v6")
	.uint32("v7")