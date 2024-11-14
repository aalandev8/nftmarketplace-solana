"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Shield, Wallet } from "lucide-react";

export default function FeaturesAndStats() {
  return (
    <>
      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Wallet className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Connect your Wallet</h3>
            <p className="text-gray-400">
              Easy and secure integration with the main wallets on the market{" "}
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Rocket className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Create and Sell</h3>
            <p className="text-gray-400">
              Publish your NFTs in a simple way and reach global buyers
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Shield className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">100% secure</h3>
            <p className="text-gray-400">
              Transactions verified and stored in blockchain{" "}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                10K+
              </motion.div>
              <div className="text-gray-400">NFTs Created</div>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              >
                5K+
              </motion.div>
              <div className="text-gray-400">Artists</div>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              >
                20K+
              </motion.div>
              <div className="text-gray-400">Users</div>
            </div>
            <div>
              <motion.div
                className="text-4xl font-bold text-purple-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                50K+
              </motion.div>
              <div className="text-gray-400">Transactions</div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
