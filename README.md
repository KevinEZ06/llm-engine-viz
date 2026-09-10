# llm-engine-viz

交互式 LLM 推理可视化：RadixAttention、Paged KV Cache、PD 分离、EAGLE-3、Ring Attention 等。浏览器打开即可，无需 GPU、无需构建。

可作为 [zero-to-sglang](https://github.com/datawhalechina/zero-to-sglang) 的**章节引子**：先看动画建立直觉，再读正文。

**在线入口：** https://kevinez06.github.io/llm-engine-viz/

## 页面

| 页面 | 讲什么 |
|------|--------|
| [journey.html](https://kevinez06.github.io/llm-engine-viz/journey.html) | 一个 Token 从输入到输出 |
| [index.html](https://kevinez06.github.io/llm-engine-viz/) | RadixAttention：前缀树、节点加锁、LRU 淘汰 |
| [PagedAttention.html](https://kevinez06.github.io/llm-engine-viz/PagedAttention.html) | Paged KV Cache：逻辑块与物理页 |
| [cacheschedule.html](https://kevinez06.github.io/llm-engine-viz/cacheschedule.html) | KV 调度：Swap / Recompute 抢占 |
| [eagle_3.html](https://kevinez06.github.io/llm-engine-viz/eagle_3.html) | EAGLE-3 推测解码（自动播放） |
| [eagle3.html](https://kevinez06.github.io/llm-engine-viz/eagle3.html) | EAGLE-3 树注意力与验证流水线（手动步进） |
| [kvpd.html](https://kevinez06.github.io/llm-engine-viz/kvpd.html) | Prefill / Decode 分离 + KVPoll |
| [pipeline.html](https://kevinez06.github.io/llm-engine-viz/pipeline.html) | SMG 路由打分 |
| [k8s.html](https://kevinez06.github.io/llm-engine-viz/k8s.html) | K8s + Mooncake 全局 KV |
| [ring_attention.html](https://kevinez06.github.io/llm-engine-viz/ring_attention.html) | Ring Attention / Context Parallel |

建议顺序：缓存与注意力 → 推测解码 → 调度与部署。

## 与 zero-to-sglang 课程映射

按 [zero-to-sglang](https://github.com/datawhalechina/zero-to-sglang) 章节**先后顺序**排列。

课程在线阅读：https://datawhalechina.github.io/zero-to-sglang/

图例：**已有** = 本仓库已有页面 · **没有** = 尚未制作 · **部分已有** = 只覆盖该章一部分

| 顺序 | 课程章节 | 课表状态 | 覆盖 | 可视化 | 引子看什么 |
|------|----------|----------|------|--------|------------|
| 1 | Part 0 · 0.1 编码伦理与开源精神 | ✅ | 没有 | — | 不计划可视化 |
| 2 | Part 0 · 0.2 部署第一个 SGLang 服务 | ✅ | 没有 | — | 实操暂不计划可视化 |
| 3 | Part I · 第1章 LLM 入门 | ✅ | 没有 | — | Transformer / 暂未补充 |
| 4 | Part I · 第2章 推理入门 | ✅ | **已有** | [kvpd.html](https://kevinez06.github.io/llm-engine-viz/kvpd.html) | Prefill/Decode 拆分直觉（源码细节见 III.5） |
| 5 | Part I · 第3章 GPU 入门 | 🔄 | 没有 | — | 硬件/执行流程暂未补充 |
| 6 | Part I · 第4章 KV Cache | ✅ | **已有** | [PagedAttention.html](https://kevinez06.github.io/llm-engine-viz/PagedAttention.html) | 逻辑块 ↔ 物理页 |
| 7 | Part I · 第5章 Benchmark | 🔄 | **已有** | [kvpd.html](https://kevinez06.github.io/llm-engine-viz/kvpd.html)（TTFT 分解）· [cacheschedule.html](https://kevinez06.github.io/llm-engine-viz/cacheschedule.html) | TTFT / 尾延迟直觉 |
| 8 | Part II · 1 引擎长什么样 | 📝 | 没有 | — | 总架构图尚未补充 |
| 9 | Part II · 2 Path of a Request | ✅ | **已有** | [journey.html](https://kevinez06.github.io/llm-engine-viz/journey.html) | Token 全链路 |
| 10 | Part II · 3 Forward & Generation | 🚧 | 没有 | — | 前向/生成循环尚未补充 |
| 11 | Part II · 4 KV Cache 实现 | 🚧 | **已有**（复用） | [PagedAttention.html](https://kevinez06.github.io/llm-engine-viz/PagedAttention.html) | 与 I.4 同页，手搓前复习 |
| 12 | Part II · 5 HTTP 与并发 | 🚧 | 没有 | — | 服务化/并发尚未补充 |
| 13 | Part II · 6 Continuous Batching | 🚧 | 没有 | — | **优先补充**；调度器视角 |
| 14 | Part II · 7 Paged KV Cache | 🚧 | **已有** | [PagedAttention.html](https://kevinez06.github.io/llm-engine-viz/PagedAttention.html) · [cacheschedule.html](https://kevinez06.github.io/llm-engine-viz/cacheschedule.html) | 分页；Swap / Recompute |
| 15 | Part II · 8 RadixAttention | 🚧 | **已有** | [index.html](https://kevinez06.github.io/llm-engine-viz/) | 前缀树、加锁、LRU |
| 16 | Part II · 9 多进程与 TP | 🚧 | 没有 | — | 规划：补充DP/TP/EP的权重切分与通信过程  |
| 17 | Part II · 10 Speculative Decoding | 🚧 | **已有** | [eagle3.html](https://kevinez06.github.io/llm-engine-viz/eagle3.html) · [eagle_3.html](https://kevinez06.github.io/llm-engine-viz/eagle_3.html) | draft → verify → accept |
| 18 | Part III · 1 Attention Backends & CUDA Graph | 🚧 | 没有 | — | 尚未补充，可参考官方 https://www.sglang.io/blog/breakable-cuda-graph |
| 19 | Part III · 2 量化 | 🚧 | 没有 | — | 未做 |
| 20 | Part III · 3 Hierarchical Caching | 🚧 | 没有 | — | 未做 |
| 21 | Part III · 4 DP Attention / EP / PP | 🚧 | **部分已有** | [ring_attention.html](https://kevinez06.github.io/llm-engine-viz/ring_attention.html)（仅 CP） | CP/Ring **已有**；DP/TP/EP 路径 **没有** |
| 22 | Part III · 5 Prefill-Decode Disaggregation | 🚧 | **已有** | [kvpd.html](https://kevinez06.github.io/llm-engine-viz/kvpd.html) · [pipeline.html](https://kevinez06.github.io/llm-engine-viz/pipeline.html) | KVPoll；Router 选 P/D |
| 23 | Part IV · 1 Cookbook 部署 | 🚧 | **已有** | [k8s.html](https://kevinez06.github.io/llm-engine-viz/k8s.html) | K8s + Mooncake（选修） |
| 24 | Part IV · 2 Profiling & Trace | 🚧 | 没有 | — | 未做 |
| 25 | Part IV · 3 SGLang PR 流程 | 🚧 | 没有 | — | 不需要 |

### 补充计划

1. II.6 Continuous Batching（优先补充）
2. II.9 / III.4 DP·TP·EP 路径（III.4 目前只有 CP）
3. 其余「没有」行暂缓

## 本地打开

```bash
git clone https://github.com/KevinEZ06/llm-engine-viz.git
cd llm-engine-viz
python3 -m http.server 8080
```

浏览器打开 http://localhost:8080 。也可以直接双击对应 `.html`。

部分页面会从 CDN 加载 React / Tailwind，需要联网。

本作品采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。
